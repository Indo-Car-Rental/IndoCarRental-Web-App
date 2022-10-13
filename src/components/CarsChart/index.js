import { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import { dataJune, dataJuly, dataAugust } from './data';
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
    const [dataChart, setDataChart] = useState({
        labels: [],
        datasets: [{
          label: "",
          data: []
        }]
    });
    const [date, setDate] = useState("june");
    const [data, setData] = useState(dataJune);

    useEffect(() => {
        setDataChart({
            labels : data.map(item => item.date),
            datasets: [
              {
                label : `Data ${date}`,
                data : data.map(item => item.totalOrder),
                backgroundColor : ["#586B90"]
              }
            ]
        });
    }, [data]);
    
    const handleSelectDate = (e) =>{
        setDate(e.target.value);
    }
    
    const handleSubmitSelectDate = (e) =>{
        e.preventDefault(date);

        if(date === 'june'){
            setData(dataJune);
        }else if(date === 'july'){
            setData(dataJuly);
        }else if(date === 'august'){
            setData(dataAugust);
        }

        console.log(data);
    }

    return (
        <section id="carsChart">
            <div className="mont-dropdown-wrapper">
                <p>Month</p>
                <div className="mont-dropdown">
                    <div className="input-group d-flex">
                        <select onChange={(e) => handleSelectDate(e)}>
                            <option value='june'>June 2022</option>
                            <option value='july'>July 2022</option>
                            <option value='august'>Agustus 2022</option>
                        </select>
                        <button className="btn btn-primary" onClick={handleSubmitSelectDate}>Go</button>
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