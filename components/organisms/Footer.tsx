export default function Footer() {
  return (
    <footer className="bg-white/5 text-white text-center py-6">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} CoolKicks. All rights reserved.
      </p>
    </footer>
  );
}