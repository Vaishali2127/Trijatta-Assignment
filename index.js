let address = {};

document
  .getElementById("checkout-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    Object.keys(address).forEach((key) => {
      address[key] = document.getElementById(key).value;
    });

    showForm(false);

    const fullAddress = `${address.house}, ${address.city}, ${address.state}, ${address.pincode}, 
  ${address.phone}`;
    document.getElementById("ad-name").innerText = address.name;
    document.getElementById("ad-complete").innerText = fullAddress;
  });

const handleChange = () => {
  showForm(true);

  Object.keys(address).forEach((key) => {
    document.getElementById(key).value = address[key] || "";
  });
};

const handleDelete = () => {
  resetData();
  Object.keys(address).forEach((key) => {
    document.getElementById(key).value = address[key];
  });
  showForm(true);
};

const showForm = (show) => {
  document.getElementById("checkout-form").style.display = show
    ? "block"
    : "none";
  document.getElementById("address-list").style.display = show
    ? "none"
    : "block";
};

const resetData = () => {
  address = {
    house: "",
    city: "",
    state: "",
    name: "",
    phone: "",
    pincode: "",
  };
};

resetData();
