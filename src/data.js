import fuji from './assets/Mt-Fuji.jpg'
import sydney from './assets/Sydney-Opera.jpg'
import geirangerfjord from './assets/Geirangerfjord.jpg'




export default [
    {
        id: 1,
        img: {
            src: fuji,
            alt: 'Mount Fuji'
        },
        title: 'Mount Fuji',
        country: 'Japan',
        googleMapsLink: 'https://maps.google.com/',
        dates: '12 Jan, 2021 - 24 Jan, 2021',
        text: 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists. '
    },

    {
        id: 2,
        img: {
            src: sydney,
            alt: 'Sydney Opera House'
        },
        title: 'Sydney Opera House',
        country: 'Australia',
        googleMapsLink: 'https://maps.google.com/',
        dates: '27 May, 2021 - 8 Jan, 2021',
        text: 'The Sydney Opera House is one of the most famous landmarks in Australia, located on Sydney Harbour. Opened in 1973, it is known for its unique sail-shaped design and hosts concerts, theater performances, and other cultural events throughout the year.'
    },

    {
        id: 3,
        img: {
            src: geirangerfjord,
            alt: 'Geirangerfjord'
        },
        title: 'Geirangerfjord',
        country: 'Norway',
        googleMapsLink: 'https://maps.google.com/',
        dates: '2 Aug, 2021 - 13 Aug, 2021',
        text: 'Geirangerfjord is one of the most beautiful fjords in Norway., surronded by steep mountains and spectacular waterfalls. It is a popular destination for cruises and outdoor activities, attracting visitors from around the worls with its breathtaking natural scenery.'
    }
]