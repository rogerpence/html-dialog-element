import GuiDialog from "./dialog.js";

/*
 * Initialize all instances of the Dialog.
 */

export const configDialog = (dialogInfo) => {
  dialogInfo.forEach(({ dialogId, dialogOpenerElement }) => {
    setUpDialog(dialogId, dialogOpenerElement);
  });
};

const setUpDialog = (dialogId, dialogOpenerElement) => {
  if (dialogId.startsWith("#")) dialogId = dialogId.slice(1);

  const myOpener = document.querySelector(dialogOpenerElement);
  myOpener.addEventListener("click", (e) => {
    window[dialogId].showModal();

    window[dialogId].addEventListener(
      "closing",
      ({ target: dialog }) => {
        if (dialog.returnValue === "confirm") {
          console.log("confirm");
        }
      },
      { once: true }
    );
  });

  const dialogElement = document.querySelector(`#${dialogId}`);
  GuiDialog(dialogElement);
};
