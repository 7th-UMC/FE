const imageImport = import.meta.glob('../../assets/images/Project/*.png', { eager: true });

export const images = Object.keys(imageImport).reduce((acc, key) => {
    const path = key.replace('../../assets/images/Project/', '').replace('.png', '');
    acc[path] = imageImport[key].default;
    return acc;
}, {});
