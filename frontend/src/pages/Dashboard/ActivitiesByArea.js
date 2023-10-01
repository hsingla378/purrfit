import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ActivitiesByArea() {
  const [activitiesByArea, setActivitiesByArea] = useState([]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const data = {
    labels: activitiesByArea.map((acitivity) => acitivity.goal),
    datasets: [
      {
        label: "# of Votes",
        data: activitiesByArea.map((acitivity) => acitivity.count),
        backgroundColor: [
          "#00a91b",
          "#33ba49",
          "#66cb76",
          "#99dda4",
          "#cceed1",
          "#ffffff",
        ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        // borderWidth: 1,
        borderColor: [
          "#00a91b",
          "#33ba49",
          "#66cb76",
          "#99dda4",
          "#cceed1",
          "#ffffff",
        ],
      },
    ],
  };

  const fetchActivitiesByArea = () => {
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
        console.log(JSON.stringify(response.data));
        setActivitiesByArea(response.data.data.activityCount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchActivitiesByArea();
  }, []);

  return (
    <Box maxW={"70%"}>
      {" "}
      <Pie data={data} options={options} />
    </Box>
  );
}
