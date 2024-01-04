// CommandInput.ts

class CommandInput {
    private placeholder: string;
    private iconPath: string;

    constructor(placeholder: string, iconPath: string) {
        this.placeholder = placeholder;
        this.iconPath = iconPath;
    }

    render(containerId: string): void {
        const container = document.getElementById(containerId);
        if (!container) {
            throw new Error(`Container with id '${containerId}' not found`);
        }

        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.placeholder = this.placeholder;
        inputElement.className = 'command-input'; // Class for styling

        const iconElement = document.createElement('img');
        iconElement.src = this.iconPath;
        iconElement.className = 'command-icon'; // Class for styling

        container.appendChild(iconElement);
        container.appendChild(inputElement);
    }
}

export default CommandInput;
