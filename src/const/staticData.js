import logoThumb from '../assets/images/thumb.svg';
import logoPriceTag from '../assets/images/pricetag.svg';
import logoDate from '../assets/images/date.svg';
import logoBadge from '../assets/images/badge.svg';
import user1 from '../assets/images/user1.png'
import user2 from '../assets/images/user2.png'

// Global
const navList = [
    {
        title: 'Our Services',
        url: '/#ourservices'
    },
    {
        title: 'Why Us',
        url: '/#whyus'
    },
    {
        title: 'Testimonial',
        url: '/#testimonial'
    },
    {
        title: 'FAQ',
        url: '/#faq'
    }
];

// Component Home - Our Services
const serviceList = [
    'Sewa Mobil Dengan Supir di Bali 12 Jam',
    'Sewa Mobil Lepas Kunci di Bali 24 Jam',
    'Sewa Mobil Jangka Panjang Bulanan',
    'Gratis Antar - Jemput Mobil di Bandara',
    'Layanan Airport Transfer / Drop In Out'
];

// Component Home - Why Us
const cardWhyUs = [
    {
        logo: logoThumb,
        title: 'Mobil Lengkap',
        desc: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
    },
    {
        logo: logoPriceTag,
        title: 'Harga Murah',
        desc: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
    },
    {
        logo: logoDate,
        title: 'Layanan 24 Jam',
        desc: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
    },
    {
        logo: logoBadge,
        title: 'Sopir Profesional',
        desc: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
    },
];

// Component Home - Testimonial
const testimonial = [
    {
        user: {
            avatar: user1,
            name: 'John Doe',
            age: 32,
            address: 'Bromo'
        },
        rating: 5,
        testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
    },
    {
        user: {
            avatar: user2,
            name: 'Jane Doe',
            age: 20,
            address: 'Bali'
        },
        rating: 5,
        testimonial: `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
    },
    {
        user: {
            avatar: user1,
            name: 'Jimmy Doe',
            age: 27,
            address: 'Tangerang'
        },
        rating: 4,
        testimonial: `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary`
    },
    {
        user: {
            avatar: user2,
            name: 'Vallen Doe',
            age: 22,
            address: 'Bandung'
        },
        rating: 3,
        testimonial: `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text`
    }
];

// Component Home - FAQ
const faq = [
    {
        question: 'Apa saja syarat yang dibutuhkan?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        question: 'Berapa hari minimal sewa mobil lepas kunci?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        question: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        question: 'Apakah Ada biaya antar-jemput?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        question: 'Bagaimana jika terjadi kecelakaan',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
];

export{navList, serviceList, cardWhyUs, testimonial, faq}