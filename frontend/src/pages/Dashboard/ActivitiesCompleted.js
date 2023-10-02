import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import Loading from "../../components/Loading";
import NotLoggenIn from "../../components/NotLoggenIn/NotLoggenIn";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ActivitiesCompleted() {
  const [activitiesCompleted, setActivitesCompleted] = useState([]);
  const [loading, setLoading] = useState(false);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 30,
          },
        },
        // position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
        display: false,
        border: {
          display: true,
          borderWidth: 2,
        },
        grid: {
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
      },
      y: {
        border: {
          display: false,
          borderWidth: 2,
        },
        grid: {
          display: true,
          drawOnChartArea: true,
          drawTicks: true,
        },
      },
    },
  };

  const labels = activitiesCompleted.map((activity) => activity.date);
  const data = {
    labels,
    datasets: [
      {
        label: "Activities Completed",
        data: activitiesCompleted.map((activity) => activity.count),
        borderColor: "rgba(0, 184, 29, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        fill: false,
        // showLine: false,
      },
    ],
  };

  const fetchActivitiesByArea = () => {
    setLoading(true);
    let token = localStorage.getItem("accessToken");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://purrfit-back.onrender.com/api/v1/user/activiyTrack",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data.history));
        setActivitesCompleted(response.data.data.history);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchActivitiesByArea();
  }, []);

  return (
    <>
      {console.log("loading", loading)}
      {loading ? (
        <Loading />
      ) : !localStorage.getItem("accessToken") ? (
        <NotLoggenIn />
      ) : (
        <Box maxW={"3xl"}>
          <Line data={data} options={options} />
        </Box>
      )}
    </>
  );
}
