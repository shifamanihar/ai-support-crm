import {
  useEffect,
  useState,
} from "react";

import API from "../../api/axios";

import "./TicketChart.css";

import {

  ResponsiveContainer,

  AreaChart,

  Area,

  XAxis,

  YAxis,

  Tooltip,

  CartesianGrid,

  PieChart,

  Pie,

  Cell,

  Legend,

} from "recharts";

import {
  FaChartLine,
} from "react-icons/fa";


const COLORS = [

  "#00d8ff",

  "#22c55e",

  "#facc15",

  "#ef4444",

];


const TicketChart = () => {

  /* =========================
     STATES
  ========================= */

  const [
    chartData,
    setChartData,
  ] = useState<any[]>([]);


  const [
    loading,
    setLoading,
  ] = useState(true);


  /* =========================
     FETCH CHART DATA
  ========================= */

  const fetchChartData =
    async () => {

      try {

        const response =
          await API.get(
            "/tickets/stats/chart"
          );


        setChartData(

          response?.data?.data || []

        );

      }

      catch (error) {

        console.log(error);

      }

      finally {

        setLoading(false);

      }

    };


  useEffect(() => {

    fetchChartData();

  }, []);


  /* =========================
     PIE DATA
  ========================= */

  const pieData = [

    {

      name: "Open",

      value: 45,

    },

    {

      name: "In Progress",

      value: 30,

    },

    {

      name: "Resolved",

      value: 20,

    },

    {

      name: "Closed",

      value: 15,

    },

  ];


  /* =========================
     LOADING
  ========================= */

  if (loading) {

    return (

      <div className="ticket-chart-card">

        <div className="chart-loading">

          <h2>

            Loading Analytics...

          </h2>

        </div>

      </div>

    );

  }


  /* =========================
     JSX
  ========================= */

  return (

    <div className="ticket-chart-card">


      {/* HEADER */}

      <div className="chart-header">

        <div>

          <h2>

            Ticket Analytics

          </h2>


          <p>

            Monthly support
            ticket growth

          </p>

        </div>


        <button
          className="live-btn"
        >

          <FaChartLine />

          Live Data

        </button>

      </div>


      {/* CHARTS */}

      <div className="charts-grid">


        {/* AREA CHART */}

        <div className="chart-wrapper">

          <ResponsiveContainer

            width="100%"

            height={380}

          >

            <AreaChart
              data={chartData}
            >


              {/* GRADIENT */}

              <defs>

                <linearGradient

                  id="colorTickets"

                  x1="0"

                  y1="0"

                  x2="0"

                  y2="1"

                >

                  <stop

                    offset="0%"

                    stopColor="#00d8ff"

                    stopOpacity={0.8}

                  />


                  <stop

                    offset="100%"

                    stopColor="#00d8ff"

                    stopOpacity={0}

                  />

                </linearGradient>

              </defs>


              {/* GRID */}

              <CartesianGrid

                strokeDasharray="4 4"

                stroke="#1e293b"

              />


              {/* X AXIS */}

              <XAxis

                dataKey="month"

                stroke="#94a3b8"

                tickLine={false}

                axisLine={false}

              />


              {/* Y AXIS */}

              <YAxis

                stroke="#94a3b8"

                tickLine={false}

                axisLine={false}

              />


              {/* TOOLTIP */}

              <Tooltip

                contentStyle={{

                  background:
                    "#111827",

                  border:
                    "1px solid rgba(0,216,255,0.2)",

                  borderRadius:
                    "14px",

                  color:
                    "#fff",

                }}

              />


              {/* AREA */}

              <Area

                type="monotone"

                dataKey="tickets"

                stroke="#00d8ff"

                strokeWidth={4}

                fill="url(#colorTickets)"

                activeDot={{

                  r: 7,

                }}

              />

            </AreaChart>

          </ResponsiveContainer>

        </div>


        {/* PIE CHART */}

        <div className="pie-chart-wrapper">

          <ResponsiveContainer

            width="100%"

            height={380}

          >

            <PieChart>

              <Pie

                data={pieData}

                cx="50%"

                cy="50%"

                outerRadius={120}

                dataKey="value"

                label

              >

                {

                  pieData.map(

                    (
                      _,
                      index
                    ) => (

                      <Cell

                        key={`cell-${index}`}

                        fill={

                          COLORS[
                            index %
                            COLORS.length
                          ]

                        }

                      />

                    )

                  )

                }

              </Pie>


              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

};

export default TicketChart;