import "./AnalyticsCard.css";

import {
  FaChartBar,
} from "react-icons/fa";


type Props = {

  title: string;

  count: number;

};


const AnalyticsCard = ({

  title,

  count,

}: Props) => {

  return (

    <div className="analytics-card">

      {/* TOP */}

      <div className="analytics-top">

        <h2>

          {title}

        </h2>


        <div className="analytics-icon">

          <FaChartBar />

        </div>

      </div>


      {/* COUNT */}

      <div className="analytics-count">

        {count}

      </div>


      {/* BOTTOM */}

      <p className="analytics-growth">

        Live support analytics

      </p>

    </div>

  );

};

export default AnalyticsCard;