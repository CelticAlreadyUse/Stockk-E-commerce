export function calculateAverageRating(ratings: number[]): number{
    let total = 0;

    if (ratings.length === 0) {
        return 0;
    }
    return parseFloat((total / ratings.length).toFixed(2));
}
