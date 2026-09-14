interface MetricStatProps {
  metric: string;
  explanation: string;
}

// A number plus a plain-English translation of what it means — never just the number.
export function MetricStat({ metric, explanation }: MetricStatProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-lg font-semibold tracking-tight text-text">
        {metric}
      </span>
      <span className="text-sm text-text-muted">{explanation}</span>
    </div>
  );
}
