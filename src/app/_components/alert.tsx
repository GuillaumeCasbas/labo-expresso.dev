import Container from "@/app/_components/container";

type Props = {
  draft?: boolean;
};

const Alert = ({ draft }: Props) => {
  return draft ? (
    <div
      className={
        "border-b dark:bg-slate-800" + draft
          ? "bg-neutral-800 border-neutral-800 text-white"
          : "bg-neutral-50 border-neutral-200"
      }
    >
      <Container>
        <div className="py-2 text-center text-sm">This is a preview</div>
      </Container>
    </div>
  ) : null;
};

export default Alert;
