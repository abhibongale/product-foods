import { siteConfig } from "../data/siteConfig";

export default function Banner() {
  return (
    <div className="bg-black text-white py-2 text-center">
      <p className="text-sm font-medium">
        {siteConfig.tagline}
      </p>
    </div>
  );
}
