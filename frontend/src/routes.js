import HomePage from './home/HomePage';
import BookingPage from './booking/BookingPage';
import AboutRestaurant from './about-restaurant/AboutRestaurant';


const NavigationConfig = [

    {
        id: "home_page",
        title: "Home",
        url: "/home",
        component: HomePage
    },
    {
        id: "booking_page",
        title: "Booking",
        url: "/booking",
        component: BookingPage
    },
    {
        id: "detail_restaurant",
        url: "/about/restaurant/:slug",
        component: AboutRestaurant
    }

]

export default NavigationConfig;