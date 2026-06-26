// Destructure the 'year' property directly within the component parameters
export default function Footer({copyright}) {

  return (
    <footer>
      {/* Render the destructured property variable */}
      {copyright} created by pearla mutombo - level 03
    </footer>
  );
}
