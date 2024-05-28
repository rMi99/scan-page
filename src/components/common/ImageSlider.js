import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

let ImageSlider = (props) => {
  const ref = React.useRef();
  const Card = React.memo(function (propsNew) {
    const { data, dataIndex } = propsNew;
    const { cover } = data[dataIndex];

    return (
      <div
        style={{
          width: "167px",
          height: "197px",
          userSelect: "none",
          // transition: 'all 1s',
        }}
        className="my-slide-component"
      >
        <img
          style={{
            height: "197px",
            width: "167px",
            objectFit: "cover",
            borderRadius: 8,
            boxShadow: "0 4px 6px 0 #cdd1e0",
            cursor: "pointer",
          }}
          draggable={false}
          src={cover}
          onClick={() => {
            props.openImageViewer(cover);
          }}
          onTouch={() => {
            props.openImageViewer(cover);
          }}
          className="gallery_img"
          alt=""
        />
      </div>
    );
  });

  return (
    <div>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let currentVisibleSlide = props.images.length > 1 ? 3 : 1;
          if (parentWidth <= 1440)
            currentVisibleSlide = props.images.length > 1 ? 3 : 1;
          if (parentWidth <= 1080)
            currentVisibleSlide = props.images.length > 1 ? 3 : 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={167}
              carouselWidth={parentWidth}
              data={props.images.map((i) => ({ cover: i }))}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={props.images.length > 1 ? 3 : 1}
              customTransition="all ease 0.8s"
              swipeThreshold={10}
              // transitionTime={800}
              useGrabCursor
              
            />
          );
        }}
      />
      <>
        {/* <ArrowBackIcon
        style={{ position: "absolute", top: "40%", left: 2, zIndex: 10}}
        onClick={() => {
          ref.current?.goBack();
        }}
        color="primary" sx={{width: 16, height: 16}} /> */}

        {/* <ArrowCircleRightIcon
        style={{ position: "absolute", top: "50%", right: 2, zIndex: 10, opacity: "0.6" }}
        onClick={() => {
          ref.current?.goNext(6);
        }}
        color="primary" sx={{width: 16, height: 16}}/> */}
      </>
    </div>
  );
};

export default ImageSlider;
