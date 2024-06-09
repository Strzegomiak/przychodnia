import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <footer className="flex justify-center content-center w-full HeaderAndFooter">
      <div className="flex justify-center items-center h-64  gap-20 text-xl">
        <div className="flex-col flex  ">
          <h2 className="font-medium">
            <HealthAndSafetyIcon style={{ marginRight: "8px" }} />
            Samodzielny Publiczny Gminny Zakład Opieki Zdrowotnej
          </h2>
          <h2 className="font-medium ml-8">
            w Zaleszanach z/s w Zbydniowie
          </h2>
          <br></br>
          <h2 className="ml-8">ul. Parkowa 8 37-415 Zbydniów</h2>

          <h2 className="ml-8">
            NIP 8652143037 REGON 830457866 KRS 0000009892
          </h2>
        </div>
        <div className="flex-col flex ">
          <h2 className="font-medium">
            <AccountCircleIcon style={{ marginRight: "8px" }} />
            Kierownik
          </h2>
          <h2 className="ml-8">lek.med. Małgorzata Szczykutowicz-Bryniak</h2>
          <br></br>
          <div className="flex gap-7">
            <div>
              <h2 className="font-medium">
                <PhoneIcon style={{ marginRight: "8px" }} />
                Telefon
              </h2>
              <h2 className="ml-8">tel. 15 845 83 05</h2>
            </div>
            <div>
              <h2 className="font-medium">
                <MailIcon style={{ marginRight: "8px" }} />
                e-mail
              </h2>
              <h2 className="ml-8">spgzozzaleszany@wp.pl</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
