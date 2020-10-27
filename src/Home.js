import React from 'react';

import './Home.css';

import Product from "./Product";

function Home() {
    return (
        <div className = "home">
            <div className="home__container">
                <img
                    className = "home__image"
                    src="https://s.yimg.com/os/creatr-uploaded-images/2020-06/98534410-ba82-11ea-beff-3c9e6c8b4275"

                    alt=""
                />
              
                <div className="home__row">
                    <Product
                        id=" 32549371458"
                        title="The Lean startup"
                        price={29.99}
                        image="https://4.bp.blogspot.com/-YIMcWtDCIo8/ThT0l_2IisI/AAAAAAAAA70/36mkMo3o-fw/w1200-h630-p-k-no-nu/ERIES_Enso_in_Blue_Master.png"
                    
                    
                    />
                    <Product
                        id="13445930"
                        title = "Amazon Echo (3rd generation) | Smart speaker with Alexa , Charcoal Fabric"
                        price={98.99}
                        image = " https://5.imimg.com/data5/XN/VF/KW/SELLER-12479946/amazon-echo-dot-3rd-gen-500x500.jpg"
                    />
                    

                </div>

                <div className="home__row">
                    
                    <Product
                    
                        id=" 32549371458"
                        title="New appple iPad Pro ( 12.9-inch , Wi-Fi , 128G) - Silver (4th Generation)"
                        price = {598.99}
                        image = " data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREhURERMVFRUWFRUVEBUVFxUVFRURFRUXFhUVFRUYHSggGBolGxYVITEhJSkrLjAuFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLTAtLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQEDBAYHAgj/xABMEAABAgMEAwgNCAkFAQAAAAABAAIDBBEFEiExQVFxBiJUYYGRsdEHCBMUFzI1dKGjs8HSIzRTcpKTsvAVFiUzQlJiZIIkQ2Ph8aL/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADMRAQACAgECBAMHAgcBAAAAAAABAgMRBBIhBTFBUSKBsRMyNGGRofAz0RQjUlNxssEk/9oADAMBAAIRAxEAPwDuKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgtujtGlB575brQO+Wa0DvlutA75brQO+W60DvlutBXvlutA75brQO+G60DvhutA75brQU75brQO+Wa0DvlmtA75ZrQe2RWnIoPaAgICAgICAgICAgtTLqNKDiu7zsjzUvNPl5YNAhgX3GlXGgJxcCNOVNHGtojbG2HZPZBmojj3WbEICG57S6E1wc8AFsMhoqK448S1Z06fuJt0z0q2O4AOqWuplUYH01WWE8gICAgICAgIFEBAQECiDy4UxHEgz2GoB4lhlVAQEBAQEBAQEBBZmcht9xQfK/ZCeP0lNVANHg4kDDucPLjWdMISXtC6SKV6aBYZd+7ChrZrXa4kQjZfcFlhvqAgogqgogICCqAgICAgIKhBlQvFGwdCwy9oCAgICAgICAgILE1kNvuKDRd1HY4kp6L3Z95rz4xbUV5iFlhDs7C9nA1Loh1i84V5nIy6BZlnwpeE2DCaGsaAGgahgjDKQEBBp27PsiSdmvEJ4fFjEAmHDpvQci9xNBXVmg1Tw4wuBRPvGdSMnhxhcCifeM6kDw4wuBRPvGdSMK+HGDwKJ94zqQPDjB4FE+8Z1IKeHKDwKL94zqQV8OELgUT7xnUgoOzlB4FF+8Z1IK+HGDwKL94zqRlUdnGDwKL94zqWGF5vZ4ggAd5RcP+RnUjIezzC4FE+8YgyJDs6yjnARpaNDaTi9pY+6NZaDU8iDqkhOQ48NkaE4PhvaHMc3EFpyIQX0BAQEBAQEFmaGA2+4oMZZYEBAQEAIPmOYYJq14wjb4OmZi8DpEMxLow0AMaORWOJjrkz1rby7/SW9IibREtpO5+T+gh/ZXof8Hg/wBELP2dfZZi2BK6ILOZbRw+P/og+zr7I6asaAMoTRyKxTgcWfPHDP2dfZhQ7Ng1xht5lNPh3E/24/Q+zr7MgWTAI/dt5lpPB4n+3H6M/ZV9kPFkGNJBaFrk4HF9McIbU0nbF3ONvBsxBDS6GXMhxGOa+gLqPo4Co3jstY1rzfiuLFTBNsMRGp84+inmm0RuJYlqWbAZWkNo2BedxZLzPmi67THm1qfDWnAAK/T829LTPmxmGqnisJJmUxYlnCI8XgCMzsUPKnoxzMearlzTX1blBsSRAF6A0nlpnnmuFbl5Y9Z/ViueZ9Wv7t4Mq0sbLwGwqAXrpJvHWa/nBdDiZL3728v+dpMOab316OvdgGYc6zHNJqGTERrOJpDXkc7nHlV5adKQEBAQEBAQWZnLl9xQYqywIKICBVBUIPmezz+2InnM30xVa4P4ivz+kpcP34b1GC9PWVxaLgtmEdO0U2OWnqjHN0qa9+ySIX5ZjnuDGCpcaDRzk5DTVVbZemNyz5Mafs52BYWxQ51z5K+43yCQ26Wh1SASKChodRWsZ43qe3r31/dFdN7m5ibnpxsaYid0EOE5l51xtG3XObDF0Cp8c7AdS4fjOPHh4d60jW+/91LNHbTG3YQBBF83SHOcAKgkXQ0m8BkaPbhxryPHpbUTKrEac9mqOOHIuljbROl2Wlaq9jr2ZtfUNpsyC2E2pIGkrm8y/VbUORmybsvRrSc470Ubx5nqVLFxJtPdFOSYjUNWtiPfLjXBppXW6uPMu3HHjHh26nBxzWNz5y7d2vfk+L5y/wDBDULoOoICAgICAgILM1ly+4oMQrLCiAgICCoQfMcuaWtFP9zNdMVW/D/xNfn9JS4vvw3h0bBemiO69piuiKSIYY0w6uCkq08pRYjZhb2js26mRZsxdisNQ3fYlwLmhpwN5oxLaEg0xoSqWau6zBPeEjPdzELuVGNvxWOd3N3d3BrGvFS69TN4o2oODq6FBTqm/V7R69vb8v1azEzO12wJmXZEhNvRGUhxBQBl10aIwh7q3qknetGGTWjWTW8WwXvhv5TE/rqP5+qnmqht1sKKYTW3SSI0cuAFd65kAA8pa7mK8dhmsV1tTmNNVlpY1xBHErcW01l0WxNx4MB8Z/jCG50NutwaS2vKq1/EJi3TCHNuK7QAk3Xb5OipJ0KzjpN+7iTmibdMIGdtHMNw6V08PHiHTw8f3RLotRTafSpOVP8Al6dPHGpd97Xr5hG85d7Ni5yd1JAQEBAQEBBZmsuX3FBiFZYeUBAqgIAQfMkDytF85mumKrfh/wCJp8/pKXD9+G3PK9TC8xw9SaY2tF++W8I5lHzTKRHbajlxW/o0mVbLitvG8wOqaCpIpTVRUslZmd702rO023uZ/wBkfadxfnlUEVtvz/ZJ392GZ2HDmGnuIIF0jfGoIJJoePDmWeRS18U1m3pKrlqnLfnWVIDWmooBjpyI4184xRq07hVv2UsXcqGju80KaWQ9O1+kbFDyObP3Mf6sVx+sp2JaUOGHAuFLtQzTSmgLfice15iZcvxDkRT4XIbRtWLMPIc6jb1QwUAArhWmfKvWcfFERDXHx8eKOqI7+6LiQTU1Vuey1W8aY7odAfzpVXkz8Czituzvva9eT43nLvZw1QWHUkBAQEBAQEFmby5fcUGGVlh5KAgICAEHzPKAG14oPCZvpiq54fP/ANNfn9JSYvvQ3GNLEZL1MTErnUw+544qRiZ28Ng1dVZmdQxpZtiDRrXab107KE+5ZpbfZBZZl5Ug3hpz2rS8NqJSGouhYhGT1HPqNGCWrvshv3bfuZtOHQAth91ht8d4xu1pvTTDQF8z8b4lsee2t6tPoq77pFj4s1ELQW3Ri5wNQB1rl1pGONz5sTO2tbtZT5UiHUb0NOwChqvV+GYerHDzGfPWeRbfo586ULXXjoXarTS/GWLV09TgqajSFJauzF2jUsCYYQDXi6VS5Uaou4J3Z3btevJ8bzl3s4a5646kgICAgICAgsTeXL7igwyVlh5KBVAqgVQAUHzLCbW1Yo/uJrpiq54d+Kp8/pKTH96G2NmXw/6m6ivV9EWWZHTsJ+trtRHvW0UtDVegvbTDNazEzLO1ucgXgNtfQetZr2lrMbIbKCnOtma1eJiEbpuubTTmMdVdKxFt+jefJHwS1hJiU4gCM+pbWrqvZDe0JuyLKbGZWHjjRxqA4V000heH8dyTW0dvmp3iZns3WRhQ5GCK4NrV2BJvH0rylaWz5NtMmWMde7T5y88RXOrjVwroJcNPKvccDFGOsPG3neWbfm020qAlX5ju6vHiZiEO0OcMNBodY5Ftrs6E6rPd5tBwuU04KjzPuJeLHx7du7XryfG85d7OGuW6DqSAgICAgICCxOeLy+4oMElZYeSUFKoFUCqCoKD5iiRblpxnapia/FECveGRvl0+f0lJj+82mXnmP0hermswsbXXwWHELMXlnS13W6aEFbxG2zIY4u1jaCBzrSZiDT0yFmXEEDQMBy1zWk332hra2mJNNc44HAZAZc63raKx3V75Fj9GPvGIzGmYOWAzzz4iudn58ROpQ90vudjxWRQa4V0CmJ1rzfi2StsczJpuVpRu6MIIPjFlNFcaHnAXneHqL7UuXrpmGrz8wGQwDk/DZpB2VovZcbWoeWrSZtb220O2iS+6rc+bs8SIim2DFlg0U0pMrFck2liTRq3ZgVR5f3FvBGrO69r15Pjecu9nDXMXHUkBAQEBAQEGPPeLy9aCOJWWHklAqgVQKoAKD5jmafpKPXLviZ/HEV7wv8XT5/8AWUmP70JSCxtcl6+Zla6YZ7C2lKknQASkM6Z0BzYTauJqdWj/ALUd5m06Z8lqLNg1ocOLEnaVmtZlFe+gTAA35oP5cyeRZmvsqXyJCzgHm9S60ZDXxlczmZ+mvT6tOpnwpcEl9KjJ7dDm6tq89nyS3hclbMcHENyB3nGvPeJcyLR0tqw2W0YJEFxycCCeI4Gqr8Cerv8Amp82vwzLVLXhCIxuQcCcNesDpXs8ETWkS8pGWJtMQ0q1YBFTTV7yuhvbo8e24iEJNR8QsaX8dOzAjvJqdnSqXM/pruGNS732vPk+N5y72cNctZdSQEBAQEBAQY1oeLy9aCLJWWHm8gpeQKoFUFQUHzNNj9pR/OJn8cRXvDPxdPn/ANZSY/vJcQjrC9bNvyWdsiDDA0p1T6QztmMZfHEFH5SjtkWJaVcXXaZYqfJlrSu1K+TukLPsm8anXpXP5PM12hF5pRzBDoDvQTgSQF5/l8ilY6r2bQnbNhMc0kEEUxovK83xPq7UT1T0OJBoA2mWhcO2ScvdNEaJiA5zHBorUUoV0eHjyV+KqDkU666aHa7HAknNppUaaZHbRfQOH8eGsvEZqdGeYaxbrnXMTUE1r0e9WOnUujxo3LWI7hhrUcz3dOm4Y05DoD+dKq8z+n81vFPxO7drz5Pjecu9nDXLWXUkBAQEBAQEGJaXico96CJJWWHklBSqBVAvIKhyD5pm30tGOc/9RM/jiK94Z+Lp8/pKSn3kzDik6KL13WktdcLzoB56LPUitlepe1LuBaQK46a7aLW0R5oLWn0TkCM2IC6E8XqZZE8hXOy9Udp8lO2S3ovtiTFwtbQP/mpoOpcbmXmtdwVyWt2ZstYD4rW92dVzSCDTHnXkM/2lpmJXKx2XLZIlgG1pezxoeYLmW4/Tbt5t+rSSsG1oMNgFcddCelVOm0ZOqW8XbbJxg8VGWyi9Dws02rrTPm58+GC12qtCOMYdAA5F7XgxNcURLwfNtvNNvbt/Zr1qSlYTtQOHSrd1vjZdTEtJui+oNO3WezzaY3tdnSqnM/prGCfidu7XjyfG85d7OGuWuOpoCAgICAgIMO1PE5Qghi5ZYebyClUC8gXkC8g+b5kftKP5xM/jiK54d+Kp8/pLO9d0xeovVw0m+1O+MVJFex09nqjXnH8lRX3EIbzNYeHsLDgVpXuj66zG2y2VaRDBeNaa9S43iGHcTpDSd90tF3TBoutpVeI5vXW0xC3jvDzI2W+fiEvOAo5ztQyoFzJtaJbz3bVLbmYDADvzTWQOgKHcRO53KSsQk2x2MoBhoAXQ4+adxMxr8mbzFYaDMuAMRzdL3/Zdvvf6F9E4EzOGsT7PB8vU57a9Za5Nxi6C53/IQBxAf9q1ljS7jpFZiGsTUvR1QMDiqvVDqY8nw6Ylot+TO0dKpcu26LXGtvJp2ztePJ8bzl3s4a5roupoCAgICAgIMK1/3fKEEEXLLDzVAvIF5AvIF5B84zhpaMc/3Ez+OIrvhv4qnz+kk+SRdGAzz1L1kVmUUVmfIYKreEj03BJ7tL94eZmLXBQ5I6aq001D1DmXAUquBzLzMaYrXskbBs183EDWupTF7s6DZrXk+d8M7li14p5OqyjGQYYhQjgPGcc3O0krh3ncpK2mVIkd53oJSKtotLCnZruTgDoB5zpVrh45y5YrCtyuR0dkDLgOgE/zuc5p0hpOHoovpPHr0ViPyecmkWyTaWr23vW3BhWIOW9QGnMt89lvB3vv2iUXKzTXbxwoRgDrHWqE1ne1m+Ka/FHlKPtuFdYdo6VDyo/y9rvCneT5Ozdrv5Pjecu9nDXOdV1NAQEBAQEBBgWyfk+UIIAuWWHm8gXkC8gXkAFB84WqT3/MUz74mPaPV7wv8XT5/SW0REz3ZkvA1r2E2L3iOzLvUwWEbyTRYmYhiVompqqme+4R37hiALkZq7Ra02/cTFbBgRIpze/D6oaKdJXkfEo68mo9FTJeOtscraJeKrlfZd0kX35JqyhvXPd/jtVfLbXklr2hzy2beMSZfdO9DgwceN1ej8P4c470mfNSzYuqJmfVlyDiILReyaOhe2idVhxsuPpvN4apa0Z5cGnNrqtPEQCPSCq153Lo8atenqj1hYjwRnrxSkJKXnyYVsRKwuUdKqc37nzW+HGsvydm7XfyfG85d7OGuU6rqiAgICAgICCPtw/JcoQa4XLLCl5BS8gXkC8gByD54nRW0Y/nEx+N6u+G/iqfP6STOoSrWal61BMsaPFa3MrW+alI7y36uy2yPfyVGeT1+SKbaUivuqC+TZtjsrFeGjLM7Auby83RVFe3TG20S8a7Bu1zcSBzD3Lz2SPj3LnzHVbadsqKWtaDyqnkitvJvWbVZG6LdC9kMQ2AgXTU/wBRFBTZmpfD/DozciJt5R3WKZJv2aPZzBmf5m+lwXoqxvlREfzTTLM2tqPafolZedpRp/hwPIV3ItuIhyMuOZ7sW0rtQdJ6FWyzqUnHi2p9mPMQidBUcXS0tpHWtLObAc5wpi0Nr9bFVeVbdFzh5InPER7S7F2u/wAwjecu9nDXOdl1RAQEBAQEBBG2+fkv8gg1kuWWFLyBVAqgVQLyD53tSKGT0w45CYmMuOI8K1wLxTkVtP5/SR4facR5o3ej/wCjtOjkXaty8mS2o7R+7TUAlHv/ADktcmCZjuiyXiqWl5ENYHVroPEta16Z0i6tsa0RRaZZ6Y2z6M2zZK4y8cznxDQF5rk8jd1a89UpizpG/noFefJc/JmlrM68myWPCDnFv8o3xOvi9KrV89yxbWmubuJsmOITfFawE8bnE+4Bek8Lr01tePVZ4uKIrNvdBR4cSGGP0Ow5QrODNWluqfT6K9MtZtaPb6M+XhViVOWJdsGJPoXQjK5t7apqGM1xiPvHXUDVqCrXvuU86x06YSzzRlQo+pS6uq2kDuii1hU429KizTurp+HV1m3+Uut9rt8wjecu9nDVR3XVUBAQEBAQEEZuh/cn6wQatVZYKoFUCqBVAqg+d7YbWdmB/cR/aOVnhxvPWP8An6SxbySXeLYbA6mLseTQvS0xRHdp5Mq2nshNDW5UGOuozVfl5JrVz7dV8upQ0naBqGDT11XPx5ZtMLk44qzo1A5pdkCCVpyb9tIs09tQ26ZkB3MOBFHNq06Ml5PNaYvMKlYmFiw44o69gTRrDoNMwocsezbJHszpecDHE1oGgl3IlMcyjtPk1i1rTbEitcczQnYK0HpXpOJSacWfzlbx7jDZj27bYLO5howy+t+aqLHTXmo8Xhz19cz5/Rl2TF7rLiIcHG8zmFK8uCvVtuqtyq/Zcjpjy7S9yULFZR5rdmXaW9YtLIeP3ugLdNYN7jaDzqLJPwutwO2bX5S692u3zCN5y72cNV3bdVQEBAQEBAQRe6P9yfrNQapVZYKoFUCqBVABQcEfCD7SitOXfEwTyOeaehW/D43ya/P6ST5Mq3J8NcSdjBroMeleizZ64a7s080TaU0Xw2k53R0Lm5805axMoax8cyu7m5BzyX0/pbtzJ5B0qvxKTNpmWcs9tQ2KalA1tDidJWvJjXmpWtMykrFiGLLRIROMKlz6jq4c4K85yK/HEtl6Us0dxwzqcVTvM9bWZ33Ys1GIa6tBVpG1wV7i44lXvPeGnWnFDXsIzu193uXfw1icMV/Nf4+7Y5ifdYZDDzUqpmmInsza3T5Nqs+EGQWN1gu5yfcAtsc/DDh57TfNM/JkhwaQpupBqbQT7rwWkztnDXplr9tCkFw429Kiv5Otwe+b5S7B2uvzCP5y72cNRO06sgICAgICAgit0v7g/Wag1KqywVQKoFUCqBVBwCfjlk/GcNEzGHIYrgfQSrHEv0Z62/nfsT5Ma3X3op1DAfnar3NyTe/b0aR5KtgOeQBkKDmwUsY9xqGIiKx3btZkNkKEA3Og5zi73KTjU1bur3ncrcxDJF4qnz71meyGa6W7MY66bmbngHWQP/SuJliI7yjs2Sy59twwH0D728rpvaNtVzs1J31R5N6x2Qu6OULIgaMR+alW+BO5RXiIiZaFbrh3Y3cgKekrs5Pht2XuJE/Zd1JVxw48FTyTtjJENqivIGH8IA5hRTxGuziViJnv6rzphrm1GYWyOMc1t3Xias29K1a6+NBW2/5Ejjb0rS/k6fAjWb5S7B2uvzCP5y72cNRu06sgICAgICAgi90jCYDqaC08gOKDTarLBVAqgVQKoFUHBN0UIwp6OHj/AHojv8XuL2nmIUmG8UyRaSfLsj40UOdWqsTnpM7Y0mJO0JdkIAuN/TvXZbaLoYebgrTUz+0obUtMsyUtyXaReeaYfwv6lrfm4dfDP7SfZyyZ7dHLOG9eeLeP6lzM962j4Wl8Vp8mbuYt+zYL78aPFwaaDvckB5wNCIhrmcwFzc2K166j+fu1/wAPbe/59Xq1d0NmPiMiMjxgWua7CW1GumKFrjwWrWYn1/nuz9hb+a/uvWzuksyMBSPGqBwaujjiBb8bFOKdtZ49p/kf3aXMQLPOImZg6/8ASs98wF0MuWLeSzSJ9f8AxbY+AyI249zmAtJc+HcdhiRca5/FjVQevdDlxXms9Pskf0xBLaEmtSfFd1KbrhQ/wOWLbiP3X4tsy1wBrjWmO9d1LHXDWOBn6tzH7w9SVty/c7sR5B0b1x6AnXDTLwM/X1Uj94Q1ozzHtIacyNByBWLWiYdHjce2O27ezvHa+yb2Wa57hQRY73M42hrWV52lRrzpyAgICAgICCjmgihxBwI1hBCR9zMImrXObxYEDZXFBa/VZv0h+yOtA/VZv0h+yOtA/VZv0h+yOtA/VZv0h+yOtA/VZv0h+yOtBB7oexZJztHRXODwKCIwBr6ajoI2goIHwDSPCpn1XwoHgGkeFTPqvgQV8A0jwqZ9V8CB4BpHhUz6r4EDwDSPCpn1XwIHgGkeFTPqvgQPANI8KmfVfAgeAaR4VM+q+BA8A0jwqZ9V8CB4BpHhUz6r4EDwDSPCpn1XwIKeAaR4VM+q+BBk2f2DbNY8OiRZiKB/A5zGtO260H0oOmScrDhMbChNDGMAaxrRQNaMgAgvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/Z"
                    
                    
                    />

                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>


                <div className="home__row">
                    
                    <Product />
                    <Product />
                </div>

            </div>
                
             
        </div>
    )
}

export default Home;
