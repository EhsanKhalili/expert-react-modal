import { createRoot } from 'react-dom/client';
/**
 * Display and render modal on the dom
 *
 * @param renderModal - Methods for render modal component which pass onClose method in first argument
 * @param container - Optional dom element for rendering modal inside of it
 */
export const display = (renderModal, container) => {
    let _modalContainer = container;
    if (!_modalContainer) {
        const modalDiv = document.createElement('div');
        modalDiv.id = 'easy-modal-container-' + Math.random().toString(36).substring(2, 9);
        document.body.appendChild(modalDiv);
        _modalContainer = modalDiv;
    }
    const root = createRoot(_modalContainer);
    const onClose = () => {
        root.unmount();
        if (!container)
            _modalContainer === null || _modalContainer === void 0 ? void 0 : _modalContainer.remove();
    };
    root.render(renderModal(onClose));
};
//# sourceMappingURL=display.js.map