import BookConditionChip from './BookConditionChip';

interface BookConditionGroup {
  title: string;
  labels: readonly string[];
  isSummary?: boolean;
}

interface BookConditionSectionProps {
  grade: string;
  groups: readonly BookConditionGroup[];
}

const BookConditionSection = ({ grade, groups }: BookConditionSectionProps) => (
  <section
    aria-labelledby="book-condition-heading"
    className="flex flex-col gap-12 bg-white px-(--layout-margin-x) py-16"
  >
    <h2
      id="book-condition-heading"
      className="flex h-[42px] items-center rounded-4 bg-pink-500 px-12 py-8 text-title-18sb text-white"
    >
      {`알라딘 중고 품질 판정 가이드 : ${grade}`}
    </h2>

    <dl className="flex flex-col gap-8">
      {groups.map(({ title, labels, isSummary }) => (
        <div key={title} className="flex flex-col gap-8">
          <dt className="text-body-14m">{title}</dt>
          <dd>
            <ul className="flex flex-wrap gap-8">
              {labels.map((label) => (
                <li key={label} className="flex">
                  <BookConditionChip
                    label={label}
                    variant={isSummary ? 'summary' : 'detail'}
                  />
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

export default BookConditionSection;
