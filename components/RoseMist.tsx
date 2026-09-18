/** Single flowing rose smoke wisp. Parent must be `relative` + `overflow-hidden`. Pure CSS, see globals.css. */
export default function RoseMist() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <span className="smoke" />
    </div>
  );
}
