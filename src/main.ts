function onOpen() {
  DocumentApp.getUi()
    .createAddonMenu()
    .addItem(getLocalizedStrings().labelShowPanel, "showChordGridPanel")
    .addToUi();
}

function onInstall() {
  onOpen();
}

function showChordGridPanel() {
  const html = HtmlService.createHtmlOutputFromFile("src/sidebar")
    .setTitle("Chords Grid Crafter")
    .setWidth(300);
  DocumentApp.getUi().showSidebar(html);
}

function insertImage(base64Image: string, scale: number, cgcModel: any) {
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
        if (description.startsWith("CGC_DATA")) {
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
  insertedElement.setAltDescription("CGC_DATA" + JSON.stringify(cgcModel));
}

function getImageBlob(base64Image: string) {
  // Decode base64 image and create a blob
  const decodedImage = Utilities.base64Decode(base64Image.split(",")[1]);
  const blob = Utilities.newBlob(decodedImage, "image/png", "chords-grid.png");
  return blob;
}

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
        if (description.startsWith("CGC_DATA")) {
          try {
            const cgcModel = JSON.parse(
              description.substring("CGC_DATA".length)
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

function getLocalizedStrings(): any {
  const strings: any = {
    en: {
      buttonInsert: "Insert / Replace",
      buttonLoad: "Load selection",
      buttonClear: "Clear",
      titleSettings: "Settings",
      labelOutputScale: "Output scale",
      labelFont: "Font",
      labelBold: "Bold",
      labelChordsOrder: "Chords reading order",
      labelShowPanel: "Show panel",
      messageInserting: "Inserting/Replacing...",
      messageLoading: "Loading...",
      messageLoadingSelection: "Loading selection...",
      messageSelectionInvalid:
        "Please place the cursor where you want to insert the grid or select an existing CGC Chord Grid.",
      labelDocumentation: "documentation",
      documentationUrl:
        "https://github.com/the8tre/gdocs-chords-grid-crafter/wiki",
      labelShape: "Shape",
      labelRectangle: "Rectangle",
      labelSquare: "Square",
    },
    fr: {
      buttonInsert: "Insérer / Remplacer",
      buttonLoad: "Charger la sélection",
      buttonClear: "Effacer",
      titleSettings: "Options",
      labelOutputScale: "Echelle de sortie",
      labelFont: "Police",
      labelBold: "Gras",
      labelChordsOrder: "Ordre de lecture des accords",
      labelShowPanel: "Afficher le panneau",
      messageInserting: "Insertion/Remplacement...",
      messageLoading: "Chargement...",
      messageLoadingSelection: "Chargement de la sélection...",
      messageSelectionInvalid:
        "Placez le cusrseur au point d'insertion de la grille ou sélectionnez une grille d'accords CGC existante.",
      labelDocumentation: "documentation",
      documentationUrl:
        "https://github.com/the8tre/gdocs-chords-grid-crafter/wiki/Home-fr-FR",
      labelShape: "Forme",
      labelRectangle: "Rectangle",
      labelSquare: "Carré",
    },
  };

  const locale = Session.getActiveUserLocale(); // E.g., "en", "fr"
  // const locale = "en";
  return strings[locale] || strings["en"]; // Default to English if locale not found
}
