import { useContext } from "react";
import { Context as PopupContext } from "../../contexts/PopupContext";
import { Context as DeletePopupContext } from "../../contexts/DeletePopupContext";
import { Context as EditContext } from "../../contexts/EditContext";
import { Context as EditPopupContext } from "../../contexts/EditPopupContext";
import { Context as PagesContext } from "../../contexts/PagesContext";

export const usePopup = () => useContext(PopupContext)

export const useDelete = () => useContext(DeletePopupContext)

export const useEditMode = () => useContext(EditContext)

export const useEditPopup = () => useContext(EditPopupContext)

export const usePages = () => useContext(PagesContext)