import uuid from 'uuid';


export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = { text: action.text, id: uuid() }
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant]
            }

        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(r => r.id !== action.id);
            return {...state, restaurants}

        case 'ADD_REVIEW':
            const review = {text: action.review.text, restaurantId: action.review.restaurantId, id: uuid()}
            return { 
                ...state,
                reviews: [...state.reviews, review]
            }

        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(r => r.id !== action.id);
            return {...state, reviews}

        default:
            return state;

    }

}
