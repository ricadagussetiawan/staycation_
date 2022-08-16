import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";
// import TermConditions from "assets/images/Capture.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">Selamat datang di Staycation .</p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Untuk Pemula</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Buat Akun
                </Button>
              </li>
              {/* <li className="list-group-item">
                <Button type="link" href="/properties">
                  Mulai Pesan Kamar
                </Button>
              </li> */}
              <li className="list-group-item">
                <a href="https://www.sketchappsources.com/resources/source-image/indonesian-payment-methods-icons-anas-kurniawan.png" class="list-group active">
                  Gunakan Pembayaran
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Jelajahi</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
              <a href="https://www.cekindo.com/careers" class="list-group active">
                  Karir
                </a>
              </li>
              <li className="list-group-item">
              <a href="https://www.linkedin.com/in/ricad-agus-setiawan-53183a167/" class="list-group active">
                  Pribadi
                </a>
              </li>
              {/* <li className="list-group-item">
              <a href="https://www.linkedin.com/in/ricad-agus-setiawan-53183a167/" class="list-group active">
              Syarat & Ketentuan
                </a>
              </li>  */}
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Hubungi Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:ichacnakval@gmail.com">
                  ichacnakval@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+02142882913">
                  021 - 4288 - 2913
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6281292931896">
                0812 - 9293 -1896
                </Button>
              </li>
              {/* <li className="list-group-item">
                <span>Staycation, Kemang, Jakarta</span>
              </li> */}
              <li className="list-group-item">
                <Button isExternal type="link" href="https://www.google.com/maps/uv?pb=!1s0x2e69f1f0430433cf%3A0x6b92d13c2900de0e!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMXPfowQOfq0R58tAU8hnVjfIfRisFZAAN97DWn%3Dw373-h180-k-no!5sstaycation%20in%20kemang%20vilage%20-%20Panyliksikan%20Google!15sCgIgAQ&imagekey=!1e10!2sAF1QipMXPfowQOfq0R58tAU8hnVjfIfRisFZAAN97DWn&hl=ban&sa=X&ved=2ahUKEwilqYqeiMn5AhVgH7cAHe9XCycQoip6BAhDEAM">
                <span>Staycation, Kemang, Jakarta</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">Copyright 2019 • Ricad Agus Setiawan • Staycation</div>
        </div>
      </div>
    </footer>
  );
}
