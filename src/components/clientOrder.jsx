import React, { Component } from "react";
import shoppingCart from "../svgs/shopping-cart.svg";
import calendarCheck from "../svgs/calendar-check.svg";
import wallet from "../svgs/wallet.svg";
import line from "../svgs/line.svg";
import dot from "../svgs/dot.svg";
import paymentPic from "../images/payment-pic.jpg";
import "../styles/clientOrder.css";

class clientOrder extends Component {
	state = { account: { nameFa: "", nameEn: "", email: "" } };

	handleChange = (e) => {
		const account = { ...this.state.account };
		account[e.target.name] = e.target.value;
		this.setState({ account });
	};
	render() {
		const { account } = this.state;
		const { nameFa, model } = this.props.product;
		return (
			<div className="client-order">
				<form action="">
					<img className="bgimg" src={paymentPic} alt="" />
					<div className="form-div">
						<input
							type="text"
							id="nameFa"
							name="nameFa"
							value={account.nameFa}
							onChange={this.handleChange}
						/>
						<label
							className={account.nameFa === "" ? "" : "valued"}
							htmlFor="nameFa">
							نام و نام خانوادگی (فارسی)
						</label>
						<input
							type="text"
							id="nameEn"
							name="nameEn"
							value={account.nameEn}
							onChange={this.handleChange}
						/>
						<label
							className={account.nameEn === "" ? "" : "valued"}
							htmlFor="nameEn">
							نام و نام خانوادگی (انگلیسی)
						</label>
						<input
							type="text"
							id="email"
							name="email"
							value={account.email}
							onChange={this.handleChange}
						/>
						<label
							className={account.email === "" ? "" : "valued"}
							htmlFor="email">
							ایمیل
						</label>
					</div>
					<div className="info-div">
						<div className="desc cart">
							<img src={shoppingCart} alt="" />
							{`${nameFa} ${model.nameFa}`}
						</div>
						<div className="desc">
							<img className="dot" src={dot} alt="" />
							<img src={wallet} alt="" />
							هزینه: {model.price}$
						</div>
						<div className="desc">
							<img className="dot" src={dot} alt="" />
							<img src={calendarCheck} alt="" />
							زمان تحویل: پنج روز کاری
						</div>
						<img className="line" src={line} alt="" />
						<button type="submit">
							<span>پرداخت</span>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<span>{model.price * 31000}</span>
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default clientOrder;
