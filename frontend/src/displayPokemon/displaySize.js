function getSizeName(id) {
    let sizeName;
    switch (id) {
        case 0:
            sizeName = "Pygmy";
            break;
        case 1:
            sizeName = "Runt";
            break;
        case 2:
            sizeName = "Small";
            break;
        case 3:
            sizeName = "Ordinary";
            break;
        case 4:
            sizeName = "Huge";
            break;
        case 5:
            sizeName = "Giant";
            break;
        case 6:
            sizeName = "Enormous";
            break;
        case 7:
            sizeName = "Ginormous";
            break;
        case 8:
            sizeName = "Microscopic";
            break;
        default:
            sizeName = "Unknown Size";
            break;
    }
    return sizeName;
}
