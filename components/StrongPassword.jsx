export const StrongPassword = ({ password, length }) => {
    return (
      <div>
        <p>
          Vygenerované heslo ({length} znaků): <strong>{password}</strong>
        </p>
      </div>
    );
  };