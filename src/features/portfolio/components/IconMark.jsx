export default function IconMark({ Icon, className }) {
  if (!Icon) {
    return null;
  }

  return <Icon className={className} />;
}
