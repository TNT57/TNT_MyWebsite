interface MetricStatProps {
  metric: string;
  explanation: string;
}

// A number plus a plain-English translation of what it means — never just the number.
export function MetricStat({ metric, explanation }: MetricStatProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-3xl font-bold tracking-tight text-balance tabular-nums text-text md:text-4xl">
        {metric}
      </span>
      <span className="max-w-[50ch] text-sm text-text-muted">{explanation}</span>
    </div>
  );
}
