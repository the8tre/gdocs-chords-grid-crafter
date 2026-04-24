function onOpen() {
  DocumentApp.getUi()
    .createAddonMenu()
    .addItem(getLocalizedStrings().labelShowPanel, 'showChordGridPanel')
    .addToUi();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onInstall() {
  onOpen();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function showChordGridPanel() {
  const html = HtmlService.createHtmlOutputFromFile('src/sidebar')
    .setTitle('Chords Grid Crafter')
    .setWidth(300);
  DocumentApp.getUi().showSidebar(html);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function insertImage(base64Image: string, scale: number, cgcModel: object) {
  const doc = DocumentApp.getActiveDocument();
  let insertedElement = null;
  const cursor = doc.getCursor();
  const selection = doc.getSelection();
  if (selection) {
    const elements = selection.getRangeElements();
    if (elements.length === 1) {
      const element = elements[0].getElement();
      if (element.getType() === DocumentApp.ElementType.INLINE_IMAGE) {
        const image = element.asInlineImage();
        const description = image.getAltDescription();
        if (description.startsWith('CGC_DATA')) {
          const parent = element.getParent();
          const offset = parent.getChildIndex(element);
          element.removeFromParent();
          insertedElement = parent
            .asParagraph()
            .insertInlineImage(offset, getImageBlob(base64Image));
        }
      }
    }
  } else if (cursor) {
    insertedElement = cursor.insertInlineImage(getImageBlob(base64Image));
  }

  if (insertedElement === null) {
    DocumentApp.getUi().alert(getLocalizedStrings().messageSelectionInvalid);
    return;
  }

  insertedElement.setWidth((insertedElement.getWidth() * scale) / 100);
  insertedElement.setHeight((insertedElement.getHeight() * scale) / 100);
  insertedElement.setAltDescription('CGC_DATA' + JSON.stringify(cgcModel));
}

function getImageBlob(base64Image: string) {
  // Decode base64 image and create a blob
  const decodedImage = Utilities.base64Decode(base64Image.split(',')[1]);
  const blob = Utilities.newBlob(decodedImage, 'image/png', 'chords-grid.png');
  return blob;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function loadFromSelection() {
  const doc = DocumentApp.getActiveDocument();
  const selection = doc.getSelection();
  if (selection) {
    const elements = selection.getRangeElements();
    if (elements.length === 1) {
      const element = elements[0].getElement();
      if (element.getType() === DocumentApp.ElementType.INLINE_IMAGE) {
        const image = element.asInlineImage();
        const description = image.getAltDescription();
        if (description.startsWith('CGC_DATA')) {
          try {
            const cgcModel = JSON.parse(
              description.substring('CGC_DATA'.length),
            );
            return cgcModel;
          } catch {
            return null;
          }
        }
      }
    }
  }
  return null;
}

interface LocalizedStrings {
  buttonInsert: string;
  buttonLoad: string;
  buttonClear: string;
  titleSettings: string;
  labelOutputScale: string;
  labelFont: string;
  labelBold: string;
  labelChordsOrder: string;
  labelShowPanel: string;
  messageInserting: string;
  messageLoading: string;
  messageLoadingSelection: string;
  messageSelectionInvalid: string;
  labelDocumentation: string;
  documentationUrl: string;
  labelShape: string;
  labelRectangle: string;
  labelSquare: string;
  labelTranspose: string;
  labelSemitones: string;
  buttonApply: string;
}

function getLocalizedStrings(): LocalizedStrings {
  const strings: Record<string, LocalizedStrings> = {
    en: {
      buttonInsert: 'Insert / Replace',
      buttonLoad: 'Load selection',
      buttonClear: 'Clear',
      titleSettings: 'Settings',
      labelOutputScale: 'Output scale',
      labelFont: 'Font',
      labelBold: 'Bold',
      labelChordsOrder: 'Chords reading order',
      labelShowPanel: 'Show panel',
      messageInserting: 'Inserting/Replacing...',
      messageLoading: 'Loading...',
      messageLoadingSelection: 'Loading selection...',
      messageSelectionInvalid:
        'Please place the cursor where you want to insert the grid or select an existing CGC Chord Grid.',
      labelDocumentation: 'documentation',
      documentationUrl: 'https://chords-grid-crafter.fr',
      labelShape: 'Shape',
      labelRectangle: 'Rectangle',
      labelSquare: 'Square',
      labelTranspose: 'Transpose',
      labelSemitones: 'semitone(s)',
      buttonApply: 'Apply',
    },
    fr: {
      buttonInsert: 'Insérer / Remplacer',
      buttonLoad: 'Charger la sélection',
      buttonClear: 'Effacer',
      titleSettings: 'Options',
      labelOutputScale: 'Echelle de sortie',
      labelFont: 'Police',
      labelBold: 'Gras',
      labelChordsOrder: 'Ordre de lecture des accords',
      labelShowPanel: 'Afficher le panneau',
      messageInserting: 'Insertion/Remplacement...',
      messageLoading: 'Chargement...',
      messageLoadingSelection: 'Chargement de la sélection...',
      messageSelectionInvalid:
        "Placez le cusrseur au point d'insertion de la grille ou sélectionnez une grille d'accords CGC existante.",
      labelDocumentation: 'documentation',
      documentationUrl: 'https://chords-grid-crafter.fr/fr',
      labelShape: 'Forme',
      labelRectangle: 'Rectangle',
      labelSquare: 'Carré',
      labelTranspose: 'Transposer',
      labelSemitones: 'demi-ton(s)',
      buttonApply: 'Appliquer',
    },
  };

  let locale = 'en';
  try {
    locale = Session.getActiveUserLocale();
    locale = locale.split('_')[0]; // Use only the language code (e.g., "en" from "en_US")
  } catch (e) {
    console.error('Failed to get user locale:', e);
  }
  return strings[locale] || strings['en'];
}
