import { Plane } from "lucide-react";
import { tripMeta } from "@/data/trip";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-offwhite">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy">
            <Plane className="h-3.5 w-3.5" />
          </span>
          <div>
            <p className="font-display text-base font-semibold sm:text-lg">
              {tripMeta.portalName}
            </p>
            <p className="text-xs text-offwhite/50">{tripMeta.dateRange}</p>
          </div>
        </div>
        <p className="text-sm text-offwhite/45">Nueva York · Orlando · Miami</p>
      </div>
    </footer>
  );
}
