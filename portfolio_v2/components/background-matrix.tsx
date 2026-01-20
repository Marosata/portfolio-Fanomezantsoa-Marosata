type BackgroundMatrixProps = {
  variant?: "subtle" | "strong";
};

const COLUMN_COUNT = 28;

export function BackgroundMatrix(props: BackgroundMatrixProps) {
  const intensity =
    props.variant === "strong"
      ? "opacity-60 dark:opacity-50"
      : "opacity-45 dark:opacity-30 sm:opacity-50 sm:dark:opacity-35 lg:opacity-55 lg:dark:opacity-40";

  return (
    <div
      aria-hidden="true"
      className={`fx-matrix ${intensity}`}
    >
      <div className="fx-matrix-layer">
        {Array.from({ length: COLUMN_COUNT }).map((_, index) => (
          <div
            key={`matrix-col-a-${index}`}
            className="fx-matrix-column"
            style={{
              left: `${index * 36}px`,
              animationDuration: `${3 + (index % 5) * 0.7}s`,
              animationDelay: `${-index * 0.35}s`
            }}
          />
        ))}
      </div>
      <div className="fx-matrix-layer">
        {Array.from({ length: COLUMN_COUNT }).map((_, index) => (
          <div
            key={`matrix-col-b-${index}`}
            className="fx-matrix-column"
            style={{
              left: `${index * 36}px`,
              animationDuration: `${4 + ((index + 3) % 5) * 0.8}s`,
              animationDelay: `${-(index * 0.4 + 2)}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

