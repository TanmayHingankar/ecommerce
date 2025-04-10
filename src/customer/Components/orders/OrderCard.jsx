import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const OrderCard = ({ item, order }) => {
  const navigate = useNavigate();

  const viewOrderDetails = () => {
    navigate(`/account/order/${order?.id}`);
  };

  const downloadInvoice = () => {
    console.log("Downloading invoice for order ID:", order?.id);
  };

  const rateProduct = () => {
    navigate(`/account/rate/${item?.product.id}`);
  };

  return (
    <Box className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <button
            onClick={viewOrderDetails}
            className="flex cursor-pointer text-left w-full"
            aria-label={`View details for ${item?.product.title}`}
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item?.product.imageUrl}
              alt={item?.product.title}
            />
            <div className="ml-5">
              <p className="mb-2">{item?.product.title}</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: {item?.size}</span>
              </p>
            </div>
          </button>
          <button
            onClick={viewOrderDetails}
            className="text-blue-600 mt-2"
            aria-label={`View order #${order?.id}`}
          >
            Order #{order?.id || "123"}
          </button>
        </Grid>

        <Grid item xs={2}>
          <p>₹{item?.price}</p>
        </Grid>
        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
            {order?.orderStatus === "DELIVERED" ? (
              <>
                <FiberManualRecordIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered On Mar 03</span>
              </>
            ) : (
              <>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Expected Delivery On Mar 03</span>
              </>
            )}
          </p>
          <p className="text-xs">Your Item Has Been Delivered</p>
          {order?.orderStatus === "DELIVERED" && (
            <button
              onClick={rateProduct}
              className="flex items-center text-blue-600"
              aria-label={`Rate and review ${item?.product.title}`}
            >
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </button>
          )}
          <button
            onClick={downloadInvoice}
            className="text-blue-600 mt-2"
            aria-label="Download invoice"
          >
            Download
          </button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;