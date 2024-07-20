import Link from 'next/link';

const LinkGroup = ({ terms, base }: { terms: string[]; base: string }) => {
  return terms.map((term) => (
    <Link href={base + term} className="hover:underline">
      {' '}
      {term}
    </Link>
  ));
};

export default LinkGroup;
