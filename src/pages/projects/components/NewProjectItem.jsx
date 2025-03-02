"use client";

import { Box, Typography } from "@mui/material";
// import Head from "next/head";
// import Image from "next/image";
// import "../../app/globals.css";
// import { useState } from "react";

// import React, { useState } from "react";

const ScreenSizes = {
  normalWholeWidth: "384px",
  normalImageWidth: 336,
  smallWholeWidth: "327px",
  smallImageWidth: 279,
  normalimageHeight: 200,
  smallImageHeight: 200,
  normalWholeHeight: "528px",
};

const Colors = {
  yellow: "#F4D04E",
  fontColor: "#111111",
  grayColor: "#6B6B6B",
};

const FontSizes = {
  header: "24px",
  subHeader: "14px",
  description: "16px",
  mobileSubHeader: "12px",
  mobileHeader: "20px",
};

const NewProjectItem = ({ item }) => {
  return (
    <>
      {/* <Head>
        <style>{`
          body {
            font-family: 'Figtree', sans-serif;
          }
        `}</style>
      </Head> */}

      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          width: {
            xs: ScreenSizes.smallWholeWidth,
            sm: ScreenSizes.smallWholeWidth,
            md: ScreenSizes.smallWholeWidth,
            lg: ScreenSizes.normalWholeWidth,
            xl: ScreenSizes.normalWholeWidth,
          },
          height: "auto",
          border: "1px #111111 solid",
          padding: "24px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          color: Colors.fontColor,
          "&:hover": {
            boxShadow: "10px 10px",
          },
          transitionDuration: "0.5s",
        }}
        boxShadow="0px 0px"
      >
        <a href={item.demo} className="" target="blank">
          <img
            src={item.image}
            width={336}
            maxHeight={200}
            alt="illustration"
            style={{
              borderRadius: "10px",
            }}
          />
        </a>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <div
            style={{
              borderRadius: "4px",
              backgroundColor: "#F4D04E",
              paddingTop: "4px",
              paddingLeft: "12px",
              paddingBottom: "4px",
              paddingRight: "12px",
              fontWeight: "bolder",
              fontSize: FontSizes.subHeader,
              fontFamily: "Figtree, sans-serif",
            }}
          >
            Learning
          </div>
          <Typography
            sx={{
              fontSize: FontSizes.subHeader,
              color: Colors.fontColor,
            }}
          >
            Published 21 Dec 2023
          </Typography>
          <Typography
            sx={{
              fontSize: FontSizes.header,
              fontWeight: 800,
              letterSpacing: -1,
              wordSpacing: -3,
            }}
          >
            {item.title}
          </Typography>
          <div
            style={{
              fontSize: FontSizes.description,
              color: Colors.grayColor,
              fontFamily: "Figtree, sans-serif",
            }}
          >
            {item.desc}
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          {/* <img src={item.image} width={32} height={32} alt="profile" /> */}
          <div className="flex flew-row justify-evenly font-bold text-sm w-[300px]">
            {item.languages.map((item, index) => (
              <h1 key={index}>{item}</h1>
            ))}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default NewProjectItem;
