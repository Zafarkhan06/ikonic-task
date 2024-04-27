export const generateInitials = (name) => {
    const nameParts = name.split(' ');
    if (nameParts.length >= 2) {
        return nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase();
    } else {
        return name[0].toUpperCase();
    }
};

export const ucFirst = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export const copyToClipboard = (base64) => {
    const image = new Image();

    image.src = base64;

    image.onload = async function () {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);

        canvas.toBlob(async function (blob) {
            if (blob) {
                try {
                    await navigator.clipboard.write([
                        new ClipboardItem({
                            "image/png": blob
                        })
                    ]);
                } catch (error) {
                    console.error("Error copying image to clipboard:", error);
                }
            } else {
                console.error("Failed to convert canvas to Blob.");
            }
        }, "image/png");
    };
}
