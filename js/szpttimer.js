$(document).ready(function(){
	$("#entersystem").click(function(){
		if($("#gamename").val() == ""){
			alert("比赛名称不为空");
			$("#gamename").parent().addClass("warning");
			var warning = setTimeout(function(){
				$("#gamename").parent().removeClass("warning");
				clearTimeout(warning);
			},1000);
		}else if($("#leftteamname").val() == ""){
			alert("正方队伍名称不为空");
		}else if($("#rightteamname").val() == ""){
			alert("反方队伍名称不为空");
		}else if($("#lefttitle").val() == ""){
			alert("正方队伍的辩题不为空");
		}else if($("#righttitle").val() == ""){
			alert("反方队伍的辩题不为空");
		}else{
			$(".pass").attr("style","display:none;");
			$(".timing-system").removeClass("blur");
			$(".thegame h2").text($("#gamename").val());

			$("#leftteam").append($("#leftteamname").val());
			$("#rightteam").append($("#rightteamname").val());

			$("#thelefttitle").text($("#lefttitle").val());
			$("#therighttitle").text($("#righttitle").val());
		}
	});

	$("#step1").click(function(){
		$(".thegame").attr("style","display:none;");
		$(".t11").removeAttr("style");
	})



	//正方一辩立论
	$("#t11_start").click(function(){
		$("#t11_start").attr("disabled","disabled");
		$('#countdown11').ClassyCountdown({
			end: '121',
			now: '0',
			labels: true,
			style: {
				element: "",
				textResponsive: .5,
				minutes: {
					gauge: {
						thickness: .08,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#8e44ad"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				},
				seconds: {
					gauge: {
						thickness: .01,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f39c12"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				}

			},
			onEndCallback: function() {
				$(".t11").attr("style","display:none;");
				$(".t12").removeAttr("style");
			}
		});

		//console.log(now);
	})

	//反方一辩立论
	 $("#t12_start").click(function(){
		$("#t12_start").attr("disabled","disabled");
		$('#countdown12').ClassyCountdown({
			end: '121',
			now: '0',
			labels: true,
			style: {
				element: "",
				textResponsive: .5,
				minutes: {
					gauge: {
						thickness: .08,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#8e44ad"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				},
				seconds: {
					gauge: {
						thickness: .01,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f39c12"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				}

			},
			onEndCallback: function() {
				$(".t12").attr("style","display:none;");
				 $(".t21").removeAttr("style");
				 $(".t22").removeAttr("style");
				//$(".t2").removeAttr("style");
			}
		});
	 })


	 //自由辩论环节
	 // $("#t2_start").click(function(){
		// $("#t2_start").attr("disabled","disabled");
		// $('#countdown21').ClassyCountdown({
		// 	end: '361',
		// 	now: '0',
		// 	labels: true,
		// 	style: {
		// 		element: "",
		// 		textResponsive: .5,
		// 		minutes: {
		// 			gauge: {
		// 				thickness: .08,
		// 				bgColor: "rgba(0,0,0,0.05)",
		// 				fgColor: "#8e44ad"
		// 			},
		// 			textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
		// 		},
		// 		seconds: {
		// 			gauge: {
		// 				thickness: .01,
		// 				bgColor: "rgba(0,0,0,0.05)",
		// 				fgColor: "#f39c12"
		// 			},
		// 			textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
		// 		}

		// 	},
		// 	onEndCallback: function() {
		// 		// $(".t21").attr("style","display:none;");
		// 		// $(".t22").removeAttr("style");
		// 		alert("正方时间到");
		// 	}
		// });

		// $('#countdown22').ClassyCountdown({
		// 	end: '361',
		// 	now: '0',
		// 	labels: true,
		// 	style: {
		// 		element: "",
		// 		textResponsive: .5,
		// 		minutes: {
		// 			gauge: {
		// 				thickness: .08,
		// 				bgColor: "rgba(0,0,0,0.05)",
		// 				fgColor: "#8e44ad"
		// 			},
		// 			textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
		// 		},
		// 		seconds: {
		// 			gauge: {
		// 				thickness: .01,
		// 				bgColor: "rgba(0,0,0,0.05)",
		// 				fgColor: "#f39c12"
		// 			},
		// 			textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
		// 		}

		// 	},
		// 	onEndCallback: function() {
		// 		// $(".t22").attr("style","display:none;");
		// 		// $(".t31").removeAttr("style");
		// 		alert("反方时间到");
		// 	}
		// });
	 // })


	//正方自由辩论
	$("#t21_start").click(function(){
		$("#t21_start").attr("disabled","disabled");
		$('#countdown21').ClassyCountdown({
			end: '361',
			now: '0',
			labels: true,
			style: {
				element: "",
				textResponsive: .5,
				minutes: {
					gauge: {
						thickness: .08,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#8e44ad"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				},
				seconds: {
					gauge: {
						thickness: .01,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f39c12"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				}

			},
			onEndCallback: function() {
				$(".t21").attr("style","display:none;");
				$(".t22").removeAttr("style");
			}
		});
	})

	//反方自由辩论
	 $("#t22_start").click(function(){
		$("#t22_start").attr("disabled","disabled");
		$('#countdown22').ClassyCountdown({
			end: '361',
			now: '0',
			labels: true,
			style: {
				element: "",
				textResponsive: .5,
				minutes: {
					gauge: {
						thickness: .08,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#8e44ad"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				},
				seconds: {
					gauge: {
						thickness: .01,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f39c12"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				}

			},
			onEndCallback: function() {
				$(".t22").attr("style","display:none;");
				$(".t31").removeAttr("style");
			}
		});
	 })



	//正方奇袭
	 $("#t31_start").click(function(){
		$("#t31_start").attr("disabled","disabled");
		$('#countdown31').ClassyCountdown({
			end: '121',
			now: '0',
			labels: true,
			style: {
				element: "",
				textResponsive: .5,
				minutes: {
					gauge: {
						thickness: .08,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#8e44ad"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				},
				seconds: {
					gauge: {
						thickness: .01,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f39c12"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				}

			},
			onEndCallback: function() {
				$(".t31").attr("style","display:none;");
				$(".t32").removeAttr("style");
			}
		});
	 })

	//反方奇袭
	 $("#t32_start").click(function(){
		$("#t32_start").attr("disabled","disabled");
		$('#countdown32').ClassyCountdown({
			end: '121',
			now: '0',
			labels: true,
			style: {
				element: "",
				textResponsive: .5,
				minutes: {
					gauge: {
						thickness: .08,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#8e44ad"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				},
				seconds: {
					gauge: {
						thickness: .01,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f39c12"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				}

			},
			onEndCallback: function() {
				$(".t32").attr("style","display:none;");
				$(".t41").removeAttr("style");
			}
		});
	 })



	//正方陈词
	 $("#t41_start").click(function(){
		$("#t41_start").attr("disabled","disabled");
		$('#countdown41').ClassyCountdown({
			end: '151',
			now: '0',
			labels: true,
			style: {
				element: "",
				textResponsive: .5,
				minutes: {
					gauge: {
						thickness: .08,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#8e44ad"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				},
				seconds: {
					gauge: {
						thickness: .01,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f39c12"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				}

			},
			onEndCallback: function() {
				$(".t41").attr("style","display:none;");
				$(".t42").removeAttr("style");
			}
		});
	 })

	//反方陈词
	 $("#t42_start").click(function(){
		$("#t42_start").attr("disabled","disabled");
		$('#countdown42').ClassyCountdown({
			end: '151',
			now: '0',
			labels: true,
			style: {
				element: "",
				textResponsive: .5,
				minutes: {
					gauge: {
						thickness: .08,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#8e44ad"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				},
				seconds: {
					gauge: {
						thickness: .01,
						bgColor: "rgba(0,0,0,0.05)",
						fgColor: "#f39c12"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#34495e;'
				}

			},
			onEndCallback: function() {
				// $(".t42").attr("style","display:none;");
				// $(".t41").removeAttr("style");
				alert("比赛结束");
			}
		});
	 })
})