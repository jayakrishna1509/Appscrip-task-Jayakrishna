import Image from "next/image";

export default function CurrencyUsd() {
  return (
    <div className="footer-currency-row">
      <span className="currency-flag">
        <Image src="/us-flag.svg" alt="" width={22} height={22} />
      </span>
      <span className="currency-label">
        <span className="currency-diamond" aria-hidden>
          ◆
        </span>
        USD
      </span>
    </div>
  );
}
