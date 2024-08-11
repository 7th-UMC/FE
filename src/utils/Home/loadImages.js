const imageImport = import.meta.glob('../../assets/images/Home/If/*.png', { eager: true });

export const images = Object.keys(imageImport).reduce((acc, key) => {
    const path = key.replace('../../assets/images/Home/If/', '').replace('.png', '');
    acc[path] = imageImport[key].default;
    return acc;
}, {});
