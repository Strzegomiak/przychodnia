const MapGoogle = () => {
  return (
    <div className="flex justify-center content-center">
      <iframe
        className="w-full h-96"
        title="HomeMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d632.6446224600688!2d21.92696784499012!3d50.63494668382737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722cceb05dc3fb7%3A0x68623975b3036e0!2sParkowa%208%2C%2037-415%20Zbydni%C3%B3w!5e0!3m2!1spl!2spl!4v1713800377486!5m2!1spl!2spl"
        // width="1200"
        // height="450"
        // style="border:0;"
        // allowfullScreen=""
        loading="lazy"
        //   referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapGoogle;
