type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="markdown">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
