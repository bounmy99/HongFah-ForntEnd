import React, { useState } from "react";
// import "./styles.css";

const OrgChart = () => {
  const [data, setData] = useState({
    name: "Phonexay Sonethasine",
    children: [
      {
        name: "Phonexay Sonethasine",
        children: [
          {
            name: "Phonexay Sonethasine"
          },
          {
            name: "Phonexay Sonethasine"
          },
          {
            name: "Phonexay Sonethasine"
          },
          {
            name: "Phonexay Sonethasine"
          }
        ]
      },
      {
        name: "Phonexay Sonethasine",
        children: [
          {
            name: "Phonexay Sonethasine"
          },
          {
            name: "Phonexay Sonethasine"
          },
          {
            name: "Phonexay Sonethasine"
          },
          {
            name: "Phonexay Sonethasine"
          }
        ]
      },
      {
        name: "Phonexay Sonethasine",
        children: [
          {
            name: "Phonexay Sonethasine"
          },
          {
            name: "Phonexay Sonethasine"
          },
          {
            name: "Phonexay Sonethasine"
          },
          {
            name: "Phonexay Sonethasine"
          }
        ]
      }
    ]
  });

  return (
    <div className="org-chart">
      <div className="node">
       {/* {data.name} */}
        {/*  {data.children && (
          <ul>
            {data.children.map((child, index) => (
              <li key={index}>
                <OrgChart data={child} />
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </div>
  );
};

export default OrgChart;