import Icon from "./Icon";

export default function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark__ring" />
      <span className="brand-mark__core">
        <Icon name="spark" className="h-4 w-4" />
      </span>
    </span>
  );
}
