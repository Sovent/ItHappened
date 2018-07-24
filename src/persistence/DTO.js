const CustomizationType = {
    RATING: 0,
    METRIC: 1,
    COMMENT: 2,
    PHOTO: 3,
    GEO: 4
};
Object.freeze(CustomizationType);

const CustomizationTypes = [
    CustomizationType.RATING,
    CustomizationType.METRIC,
    CustomizationType.COMMENT,
    CustomizationType.PHOTO,
    CustomizationType.GEO
];
Object.freeze(CustomizationTypes);

export { CustomizationType, CustomizationTypes };
