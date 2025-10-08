type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="mx-auto text-base/7">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
