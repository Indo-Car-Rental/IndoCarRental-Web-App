import { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import { dataTest } from './data';
import "./style.scss";
import { 
    Chart as ChartJS,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
} from "chart.js";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.css";
import axios from "axios";

ChartJS.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

const CarsChart = () => {
    const { combine, allowedMaxDays, beforeToday } = DateRangePicker;
    const [dataChart, setDataChart] = useState({
        labels: [],
        datasets: [{
          label: "",
          data: []
        }]
    });
    const [data, setData] = useState(dataTest);
    const [datas, setDatas] = useState();

    const [from, setFrom] = useState("2022-10-01");
    const [until, setUntil] = useState("2022-10-30");

    useEffect(() => {
        setDataChart({
            labels : data.map(item => item.day),
            datasets: [
              {
                label : `Data Order Reports`,
                data : data.map(item => item.orderCount),
                backgroundColor : ["#586B90"]
              }
            ]
        });
    }, [data]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://bootcamp-rent-cars.herokuapp.com/admin/order/reports',
            params: {
                from: from,
                until: until
            },
            headers: {
                access_token : localStorage.getItem("admin-token")
            }
        })
        .then(function (res) {
            setData(res.data);
        })
        .catch(function (error) {
            console.log(error)
        });
    }, []);

    const handleCalender = (e) => {
        const fromz = `${e[0].getFullYear()}-${e[0].getMonth()+1}-${e[0].getDate()}`;
        const untilz = `${e[1].getFullYear()}-${e[1].getMonth()+1}-${e[1].getDate()}`;

        axios({
            method: 'get',
            url: 'https://bootcamp-rent-cars.herokuapp.com/admin/order/reports',
            params: {
                from: fromz,
                until: untilz
            },
            headers: {
                access_token : localStorage.getItem("admin-token")
            }
        })
        .then(function (res) {
            setData(res.data);
            setFrom(from);
            setUntil(until);
        })
        .catch(function (error) {
            console.log(error)
        });
    };

    return (
        <section id="carsChart">
            <div className="mont-dropdown-wrapper">
                <p>Month</p>
                <div className="mont-dropdown">
                    <div className="input-group d-flex">
                        <DateRangePicker
                            showOneCalendar
                            disabledDate={allowedMaxDays(30)}
                            placeholder="Pilih tanggal reports"
                            size="md"
                            onChange={handleCalender}
                        />
                    </div>
                </div>
            </div>
            <div className="barchart-wrapper">
                <p className='label-y'>Amount of Car Rented</p>
                <Bar className='barchart' data={dataChart} />
            </div>
            <p className='label-x'>Date</p>
        </section>
    );
}
 
export default CarsChart;