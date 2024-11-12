# Real-Time Weather Forecast App

This is a React-based application that fetches weather forecast data for any city using the OpenWeatherMap API. It provides real-time updates on weather conditions such as temperature, wind speed, humidity, and sunrise/sunset times. The app supports a theme toggle and displays the forecast for the next 5 days with relevant weather details.

**Demo published URL:**
  ```bash
   https://weather-app-git-main-mahaboob-basha-as-projects.vercel.app/
  ```

## Features

- **City-wise Weather Forecast**: Displays the weather details for any given city.
- **Real-Time Updates**: Fetches data from the OpenWeatherMap API and updates every time the user selects a city.
- **Sunrise & Sunset Information**: Shows the time of sunrise and sunset for the selected city.
- **Theme Toggle**: Allows users to toggle between light and dark themes.
- **Weather Details**: Provides key weather details such as temperature, pressure, wind speed, and humidity.
- **Responsive Design**: The app is responsive and works seamlessly across different devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: For global state management (theme toggle and weather data).
- **OpenWeatherMap API**: Used to fetch the weather data.
- **CSS/TailwindCss**: For styling the application.
- **Font Awesome**: For weather icons.

## Setup & Installation

### Prerequisites

- Node.js (preferably v16 or higher)
- npm (or yarn) installed

### Steps to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/mahaboob-basha-a/weather-app.git
   cd weather-app
2. Install the required dependencies:
   ```bash
   npm install
3. Create a .env file in the root of your project and add your OpenWeatherMap API key:
   ```bash
   WEATHER_API_KEY = "Your API key"
4. Start the application:
   ```bash
   npm start
   The app should now be running at http://localhost:5174
## Features Walkthrough
1. **Search for Weather by City:** Enter the name of any city to get a 5-day weather forecast. The app will show temperature, weather condition, wind speed, pressure, humidity, and sunrise/sunset times.
2. **Theme Toggle:** The app supports both light and dark themes. Toggle between them using the button at the top of the page.
3. **Weather Details:** For each forecasted date, you can view the temperature, humidity, wind speed, pressure, and weather conditions like "scattered clouds" or "haze."
4. **Sunrise/Sunset:** The times for sunrise and sunset are displayed based on the city’s coordinates.
## API Used
This project uses the OpenWeatherMap API to fetch weather data.
**Example API URL:**
  ```bash
  https://api.openweathermap.org/data/2.5/forecast?q=<city>,IN&appid=<your-api-key>&units=metric

