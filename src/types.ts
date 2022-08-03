/**
 * Render method type method which pass onClose as argument for closing modal and return ReactNode for displaying modal.
 */
export type TRenderModal = (onClose?: () => void) => React.ReactNode;

/**
 * Display method type
 */
export type TDisplay = (renderModal: TRenderModal, container?: HTMLElement) => void;

/**
 * Modal methods for working with method functions
 */
export interface IModal {
  display: TDisplay;
}
