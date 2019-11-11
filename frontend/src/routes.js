import HomePage from './home/HomePage';
import BookingPage from './booking/BookingPage';


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
    }

]

export default NavigationConfig;